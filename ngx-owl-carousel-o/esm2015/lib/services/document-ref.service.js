/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { isPlatformBrowser } from '@angular/common';
import { InjectionToken, PLATFORM_ID, } from '@angular/core';
/** *
 * Create a new injection token for injecting the Document into a component.
  @type {?} */
export const DOCUMENT = new InjectionToken('DocumentToken');
/**
 * Define abstract class for obtaining reference to the global Document object.
 * @abstract
 */
export class DocumentRef {
    /**
     * @return {?}
     */
    get nativeDocument() {
        throw new Error('Not implemented.');
    }
}
/**
 * Define class that implements the abstract class and returns the native Document object.
 */
export class BrowserDocumentRef extends DocumentRef {
    constructor() {
        super();
    }
    /**
     * @return {?} Document object
     */
    get nativeDocument() {
        return document;
    }
}
/**
 * Create an factory function that returns the native Document object.
 * @param {?} browserDocumentRef Native Document object
 * @param {?} platformId id of platform
 * @return {?} type of platform of empty object
 */
export function documentFactory(browserDocumentRef, platformId) {
    if (isPlatformBrowser(platformId)) {
        return browserDocumentRef.nativeDocument;
    }
    return new Object();
}
/** *
 * Create a injectable provider for the DocumentRef token that uses the BrowserDocumentRef class.
  @type {?} */
export const browserDocumentProvider = {
    provide: DocumentRef,
    useClass: BrowserDocumentRef
};
/** *
 * Create an injectable provider that uses the DocumentFactory function for returning the native Document object.
  @type {?} */
export const documentProvider = {
    provide: DOCUMENT,
    useFactory: documentFactory,
    deps: [DocumentRef, PLATFORM_ID]
};
/** *
 * Create an array of providers.
  @type {?} */
export const DOCUMENT_PROVIDERS = [browserDocumentProvider, documentProvider];

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9jdW1lbnQtcmVmLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtb3dsLWNhcm91c2VsLW8vIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvZG9jdW1lbnQtcmVmLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3BELE9BQU8sRUFHTCxjQUFjLEVBQ2QsV0FBVyxHQUNaLE1BQU0sZUFBZSxDQUFDOzs7O0FBS3ZCLGFBQWEsUUFBUSxHQUFHLElBQUksY0FBYyxDQUFXLGVBQWUsQ0FBQyxDQUFDOzs7OztBQUl0RSxNQUFNOzs7O0lBQ0osSUFBSSxjQUFjO1FBQ2hCLE1BQU0sSUFBSSxLQUFLLENBQUMsa0JBQWtCLENBQUMsQ0FBQztLQUNyQztDQUNGOzs7O0FBS0QsTUFBTSx5QkFBMEIsU0FBUSxXQUFXO0lBQ2pEO1FBQ0UsS0FBSyxFQUFFLENBQUM7S0FDVDs7OztJQUtELElBQUksY0FBYztRQUNoQixNQUFNLENBQUMsUUFBUSxDQUFDO0tBQ2pCO0NBQ0Y7Ozs7Ozs7QUFRRCxNQUFNLDBCQUNKLGtCQUFzQyxFQUN0QyxVQUFrQjtJQUVsQixFQUFFLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbEMsTUFBTSxDQUFDLGtCQUFrQixDQUFDLGNBQWMsQ0FBQztLQUMxQztJQUNELE1BQU0sQ0FBQyxJQUFJLE1BQU0sRUFBRSxDQUFDO0NBQ3JCOzs7O0FBS0QsYUFBYSx1QkFBdUIsR0FBa0I7SUFDcEQsT0FBTyxFQUFFLFdBQVc7SUFDcEIsUUFBUSxFQUFFLGtCQUFrQjtDQUM3QixDQUFDOzs7O0FBS0YsYUFBYSxnQkFBZ0IsR0FBb0I7SUFDL0MsT0FBTyxFQUFFLFFBQVE7SUFDakIsVUFBVSxFQUFFLGVBQWU7SUFDM0IsSUFBSSxFQUFFLENBQUMsV0FBVyxFQUFFLFdBQVcsQ0FBQztDQUNqQyxDQUFDOzs7O0FBS0YsYUFBYSxrQkFBa0IsR0FBRyxDQUFDLHVCQUF1QixFQUFFLGdCQUFnQixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7XHJcbiAgQ2xhc3NQcm92aWRlcixcclxuICBGYWN0b3J5UHJvdmlkZXIsXHJcbiAgSW5qZWN0aW9uVG9rZW4sXHJcbiAgUExBVEZPUk1fSUQsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG4vKipcclxuICogQ3JlYXRlIGEgbmV3IGluamVjdGlvbiB0b2tlbiBmb3IgaW5qZWN0aW5nIHRoZSBEb2N1bWVudCBpbnRvIGEgY29tcG9uZW50LlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IERPQ1VNRU5UID0gbmV3IEluamVjdGlvblRva2VuPERvY3VtZW50PignRG9jdW1lbnRUb2tlbicpO1xyXG4vKipcclxuICogRGVmaW5lIGFic3RyYWN0IGNsYXNzIGZvciBvYnRhaW5pbmcgcmVmZXJlbmNlIHRvIHRoZSBnbG9iYWwgRG9jdW1lbnQgb2JqZWN0LlxyXG4gKi9cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIERvY3VtZW50UmVmIHtcclxuICBnZXQgbmF0aXZlRG9jdW1lbnQoKTogRG9jdW1lbnQgfCBPYmplY3Qge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCdOb3QgaW1wbGVtZW50ZWQuJyk7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogRGVmaW5lIGNsYXNzIHRoYXQgaW1wbGVtZW50cyB0aGUgYWJzdHJhY3QgY2xhc3MgYW5kIHJldHVybnMgdGhlIG5hdGl2ZSBEb2N1bWVudCBvYmplY3QuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQnJvd3NlckRvY3VtZW50UmVmIGV4dGVuZHMgRG9jdW1lbnRSZWYge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEByZXR1cm5zIERvY3VtZW50IG9iamVjdFxyXG4gICAqL1xyXG4gIGdldCBuYXRpdmVEb2N1bWVudCgpOiBEb2N1bWVudCB8IE9iamVjdCB7XHJcbiAgICByZXR1cm4gZG9jdW1lbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogQ3JlYXRlIGFuIGZhY3RvcnkgZnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZSBuYXRpdmUgRG9jdW1lbnQgb2JqZWN0LlxyXG4gKiBAcGFyYW0gYnJvd3NlckRvY3VtZW50UmVmIE5hdGl2ZSBEb2N1bWVudCBvYmplY3RcclxuICogQHBhcmFtIHBsYXRmb3JtSWQgaWQgb2YgcGxhdGZvcm1cclxuICogQHJldHVybnMgdHlwZSBvZiBwbGF0Zm9ybSBvZiBlbXB0eSBvYmplY3RcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBkb2N1bWVudEZhY3RvcnkoXHJcbiAgYnJvd3NlckRvY3VtZW50UmVmOiBCcm93c2VyRG9jdW1lbnRSZWYsXHJcbiAgcGxhdGZvcm1JZDogT2JqZWN0XHJcbik6IERvY3VtZW50IHwgT2JqZWN0IHtcclxuICBpZiAoaXNQbGF0Zm9ybUJyb3dzZXIocGxhdGZvcm1JZCkpIHtcclxuICAgIHJldHVybiBicm93c2VyRG9jdW1lbnRSZWYubmF0aXZlRG9jdW1lbnQ7XHJcbiAgfVxyXG4gIHJldHVybiBuZXcgT2JqZWN0KCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGUgYSBpbmplY3RhYmxlIHByb3ZpZGVyIGZvciB0aGUgRG9jdW1lbnRSZWYgdG9rZW4gdGhhdCB1c2VzIHRoZSBCcm93c2VyRG9jdW1lbnRSZWYgY2xhc3MuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgYnJvd3NlckRvY3VtZW50UHJvdmlkZXI6IENsYXNzUHJvdmlkZXIgPSB7XHJcbiAgcHJvdmlkZTogRG9jdW1lbnRSZWYsXHJcbiAgdXNlQ2xhc3M6IEJyb3dzZXJEb2N1bWVudFJlZlxyXG59O1xyXG5cclxuLyoqXHJcbiAqIENyZWF0ZSBhbiBpbmplY3RhYmxlIHByb3ZpZGVyIHRoYXQgdXNlcyB0aGUgRG9jdW1lbnRGYWN0b3J5IGZ1bmN0aW9uIGZvciByZXR1cm5pbmcgdGhlIG5hdGl2ZSBEb2N1bWVudCBvYmplY3QuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZG9jdW1lbnRQcm92aWRlcjogRmFjdG9yeVByb3ZpZGVyID0ge1xyXG4gIHByb3ZpZGU6IERPQ1VNRU5ULFxyXG4gIHVzZUZhY3Rvcnk6IGRvY3VtZW50RmFjdG9yeSxcclxuICBkZXBzOiBbRG9jdW1lbnRSZWYsIFBMQVRGT1JNX0lEXVxyXG59O1xyXG5cclxuLyoqXHJcbiAqIENyZWF0ZSBhbiBhcnJheSBvZiBwcm92aWRlcnMuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgRE9DVU1FTlRfUFJPVklERVJTID0gW2Jyb3dzZXJEb2N1bWVudFByb3ZpZGVyLCBkb2N1bWVudFByb3ZpZGVyXTtcclxuIl19