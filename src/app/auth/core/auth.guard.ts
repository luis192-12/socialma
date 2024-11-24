import { CanActivateChildFn, CanActivateFn } from "@angular/router";
export const privateGuard = (): CanActivateChildFn => {
    return () => {
        return true;
    };  
};

export const publicGuard = (): CanActivateFn => {
    return () => {
        return true;
    };  
};