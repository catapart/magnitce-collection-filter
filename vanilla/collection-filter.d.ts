type FilterType = 'textQuery' | 'regexQuery' | 'propertyComparison' | 'inclusion' | 'exclusion';
type ItemFilterQueryMode = 'text' | 'regex';
type ItemFilterResult = ItemFilterMatch | false;
type ItemFilterUtilities = {
    matchTextQuery: (query: string, propertyValue: string) => QueryMatch[];
    matchRegexQuery: (query: string, propertyValue: string) => QueryMatch[];
};
type ItemFilterComparison<T extends any = any> = (filter: ItemFilter, item: T, utilities: ItemFilterUtilities) => ItemFilterResult;
declare class QueryMatch {
    value: string;
    start: number;
    end: number;
    constructor(value: string, start: number, end: number);
}
declare class ItemFilterMatch {
    item: any;
    queryMatches: QueryMatch[];
    filter?: ItemFilter | undefined;
    propertyName?: string | undefined;
    constructor(item: any, queryMatches: QueryMatch[], filter?: ItemFilter | undefined, propertyName?: string | undefined);
}
declare class ItemFilter {
    value: any;
    type: FilterType;
    compare: ItemFilterComparison;
    constructor(value: any, type: FilterType | undefined, compare: ItemFilterComparison);
}
declare class ItemFilters {
    filters: ItemFilter[];
    query: string;
    utilities: ItemFilterUtilities;
    constructor();
    setQuery<T extends any = any>(query: string, comparison: ItemFilterComparison<T>, mode?: ItemFilterQueryMode | null): void;
    addFilter(value: any, type: FilterType, comparison: ItemFilterComparison): ItemFilter;
    addFilters(...filters: ItemFilter[]): void;
    removeFilter(index: number): void;
    filterItems<T extends any = any>(items: T[], context?: any): ItemFilterMatch[];
    matchTextQuery(query: string, propertyValue: string): QueryMatch[];
    matchRegexQuery(query: string, propertyValue: string): QueryMatch[];
}

declare class CollectionFilterElement extends HTMLElement {
    #private;
    componentParts: Map<string, HTMLElement>;
    getElement<T extends HTMLElement = HTMLElement>(id: string): T;
    findElement<T extends HTMLElement = HTMLElement>(id: string): T;
    itemFilters: ItemFilters;
    get filterPropertyAttribute(): string;
    constructor();
    static observedAttributes: string[];
    attributeChangedCallback(attributeName: string, _oldValue: string, newValue: string): void;
    filterElements(items: HTMLElement[]): ItemFilterMatch[];
    textQueryComparison(filter: ItemFilter, item: HTMLElement, utilities: ItemFilterUtilities): ItemFilterResult;
    regexQueryComparison(filter: ItemFilter, item: HTMLElement, utilities: ItemFilterUtilities): ItemFilterResult;
    connectedCallback(): void;
}

export { CollectionFilterElement };
