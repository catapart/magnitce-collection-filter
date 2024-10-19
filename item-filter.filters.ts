export type FilterType = 'textQuery'|'regexQuery'|'propertyComparison'|'inclusion'|'exclusion';
export type ItemFilterQueryMode = 'text'|'regex';

export type ItemFilterResult = ItemFilterMatch|false;

export type ItemFilterUtilities =
{
    matchTextQuery: (query: string, propertyValue: string) => QueryMatch[],
    matchRegexQuery: (query: string, propertyValue: string) => QueryMatch[]
}
export type ItemFilterComparison<T extends any = any> = (filter: ItemFilter, item: T, utilities: ItemFilterUtilities) => ItemFilterResult;

export class QueryMatch
{ 
    constructor(public value: string, public start: number, public end: number)
    {
        
    }
}

export class ItemFilterMatch
{ 
    constructor(public item: any, public queryMatches: QueryMatch[], public filter?: ItemFilter, public propertyName?: string)
    {

    }
};

export class ItemFilter
{
    constructor(public value: any, public type: FilterType = 'textQuery', public compare: ItemFilterComparison)
    {

    }
}

export class ItemFilters
{

    filters: ItemFilter[] = [];

    query: string = "";

    utilities: ItemFilterUtilities;

    constructor()
    {
        this.utilities = 
        {
            matchTextQuery: this.matchTextQuery,
            matchRegexQuery: this.matchRegexQuery
        }
    }

    setQuery<T extends any = any>(query: string, comparison: ItemFilterComparison<T>, mode: ItemFilterQueryMode|null = null)
    {
        // remove existing query filter
        const existingQueryFilterIndex = this.filters.findIndex(item => item.type == 'textQuery' || item.type == 'regexQuery');
        if(existingQueryFilterIndex != -1)
        {
            this.removeFilter(existingQueryFilterIndex);
        }

        if(query == "") { return; }

        // add new query filter
        const filterType = (mode == 'regex') ? 'regexQuery' : 'textQuery';
        this.addFilter(query, filterType, comparison);
    }

    addFilter(value: any, type: FilterType, comparison: ItemFilterComparison)
    {
        const filter = new ItemFilter(value, type, comparison);
        this.filters.push(filter);
        return filter;
    }

    addFilters(...filters: ItemFilter[])
    {
        this.filters.concat(filters);
    }

    removeFilter(index: number)
    {
        this.filters.splice(index, 1);
    }

    filterItems<T extends any = any>(items: T[], context?: any)
    {
        const matching: ItemFilterMatch[] = [];
        let failedComparison = false;
        for(let i = 0; i < items.length; i++)
        {
            failedComparison = false;
            let matchResult = null;
            for(let j = 0; j < this.filters.length; j++)
            {
                const currentMatchResult = this.filters[j].compare.call((context ?? this), this.filters[j], items[i], this.utilities);
                if(currentMatchResult != false)
                {
                    matchResult = currentMatchResult;
                }
                else { failedComparison = true; }

                if(failedComparison == true)
                {
                    break;
                }
            }

            if(failedComparison == false && matchResult != null)
            {
                matching.push(matchResult);
            }
        }

        return matching;
    }
    
    matchTextQuery(query: string, propertyValue: string)
    {
        // console.log(propertyValue);
        // const matches = Array.from(propertyValue.match(new RegExp(query, 'i')));

        const results: QueryMatch[] = [];
        const matchIndex = propertyValue.toLowerCase().indexOf(query.toLowerCase());
        if(matchIndex == -1)
        {
            return results;
        }
        const result = new QueryMatch(query, matchIndex, matchIndex + query.length);
        results.push(result);

        return results;
    }
    matchRegexQuery(query: string, propertyValue: string)
    {
        const matches = Array.from(propertyValue.matchAll(new RegExp(query, 'gi')));

        const results = [];
        for(let i = 0; i < matches.length; i++)
        {
            const match = matches[i];
            const value = match[0];
            const result = new QueryMatch(value, match.index!, match.index! + value.length);
            results.push(result);
        }

        return results;
    }
}