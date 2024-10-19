import style from './collection-filter.css?raw';
import html from './collection-filter.html?raw';
import { ItemFilter, ItemFilterMatch, ItemFilterResult, ItemFilterUtilities, ItemFilters } from './item-filter.filters';


// export type CollectionFilterAttributes = 
// {
    
// };
// export type CollectionFilterProperties = CollectionFilterAttributes &
// {
    
// };
// export enum CollectionFilterParts
// {
    
// }


const COMPONENT_STYLESHEET = new CSSStyleSheet();
COMPONENT_STYLESHEET.replaceSync(style);

const COMPONENT_TAG_NAME = 'collection-filter';
export class CollectionFilterElement extends HTMLElement
{
    

    // #boundEventHandlers: Map<string, (event?:Event) => void> = new Map([
    // ]);

    componentParts: Map<string, HTMLElement> = new Map();
    getPart<T extends HTMLElement = HTMLElement>(key: string)
    {
        if(this.componentParts.get(key) == null)
        {
            const part = this.shadowRoot!.querySelector(`[part="${key}"]`) as HTMLElement;
            if(part != null) { this.componentParts.set(key, part); }
        }

        return this.componentParts.get(key) as T;
    }
    findPart<T extends HTMLElement = HTMLElement>(key: string) { return this.shadowRoot!.querySelector(`[part="${key}"]`) as T; }

    itemFilters: ItemFilters = new ItemFilters();

    get filterPropertyAttribute(): string
    {
        return this.getAttribute('filter-property') ?? 'data-filter-property';
    }

    constructor()
    {
        super();

        // this element contains a form, so it cannot be placed
        // inside another form element, or it will throw errors
        // To guard from that, we check here:
        const parentForm = this.closest('form');
        if(parentForm != null) { throw new Error("The <collection-filter> element cannot be placed inside of a <form> element."); }

        this.attachShadow({ mode: "open" });
        this.shadowRoot!.innerHTML = html;
        this.shadowRoot!.adoptedStyleSheets.push(COMPONENT_STYLESHEET);
        
        
        this.findPart('form').addEventListener('submit', (event: SubmitEvent) =>
        {
            const mode = this.hasAttribute('regex') ? 'regex' : null;
            const queryComparison = mode == 'regex' ? this.regexQueryComparison : this.textQueryComparison;
            this.itemFilters.setQuery(this.findPart<HTMLInputElement>('input').value, queryComparison, mode);

            this.dispatchEvent(new CustomEvent('change', { detail: { filters: this.itemFilters.filters }}));

            event.preventDefault();
            event.stopPropagation();
            return false;
        });

        this.findPart('regex-button').addEventListener('click', () =>
        {
            if(this.hasAttribute('regex'))
            {
                this.removeAttribute('regex');
            }
            else
            {
                this.toggleAttribute('regex', true);
            }
        });

        // this.findPart('new-filter').addEventListener('click', () =>
        // {
        //     console.error('New Filter not implemented');
        // });

        this.findPart('input').addEventListener('input', (event: Event) =>
        {
            if((event.currentTarget! as HTMLInputElement).value == "")
            {
                // console.log('clear query', event);
                this.itemFilters.setQuery("", () => {return false});
                this.dispatchEvent(new CustomEvent('change', { detail: { filters: this.itemFilters.filters }}));
            }
        })
    }

    static observedAttributes = [ "placeholder" ];
    attributeChangedCallback(attributeName: string, _oldValue: string, newValue: string) 
    {
        if(attributeName == "placeholder")
        {
            this.findPart<HTMLInputElement>('input').placeholder = newValue;
        }
    }

    filterElements(items: HTMLElement[])
    {
        return this.itemFilters.filterItems(items, this);
    }

    textQueryComparison(filter: ItemFilter, item: HTMLElement, utilities: ItemFilterUtilities): ItemFilterResult
    {
        const propertyValue = item.getAttribute(this.filterPropertyAttribute);
        const queryValue = propertyValue ?? item.textContent ?? "";
        const results = utilities.matchTextQuery(filter.value, queryValue);
        if(results.length == 0) { return false; }

        return new ItemFilterMatch(item, results, filter, (propertyValue == null) ? "[ Text Content ]" : this.filterPropertyAttribute);
    }
    regexQueryComparison(filter: ItemFilter, item: HTMLElement, utilities: ItemFilterUtilities): ItemFilterResult
    {
        const propertyValue = item.getAttribute(this.filterPropertyAttribute);
        const queryValue = propertyValue ?? item.textContent ?? "";
        const results = utilities.matchRegexQuery(filter.value, queryValue);
        if(results.length == 0) { return false; }

        return new ItemFilterMatch(item, results, filter, (propertyValue == null) ? "[ Text Content ]" : this.filterPropertyAttribute);
    }

    // addFilters(...filters: ItemFilter[])
    // {
    //     this.#itemFilters.addFilters(...filters);
    // }

    // addTextFilter(query: string)
    // {
    //     this.#itemFilters.addTextFilter(query);
    //     this.dispatchEvent(new CustomEvent('change', { detail: { filters: this.#itemFilters.filters } }));
    // }
    // addTagFilter()
    // {

    // }

    // removeFilter(index: number)
    // {
    //     this.itemFilters.removeFilter(index);
    // }
}

if(customElements.get(COMPONENT_TAG_NAME) == null)
{
    customElements.define(COMPONENT_TAG_NAME, CollectionFilterElement);
}