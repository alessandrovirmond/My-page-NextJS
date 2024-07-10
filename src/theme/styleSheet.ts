import { Breakpoints } from '@skynexui/responsive_stylesheet';

//Generics
type ReponsiveProperty<Type> = Partial<Record<Breakpoints, Type>>;
 
export interface StyleSheet{
    fontFamily?: ReponsiveProperty<string> | string;
    backgroundColor?:  ReponsiveProperty<string> | string;
}