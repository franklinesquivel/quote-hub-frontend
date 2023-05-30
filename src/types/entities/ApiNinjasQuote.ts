import { CategoryTypes } from '@/constants';
import { ObjectValues }  from '@/types';


export type CategoryType = ObjectValues<typeof CategoryTypes>;

export type ApiNinjasQuote = {
    author: string
    quote: string
    category: CategoryType
}