import { Injectable } from '@angular/core';

import { BaseRequestOptions, RequestOptions } from '@angular/http';

@Injectable()
export class DefaultRequestOptions extends BaseRequestOptions {

  constructor() {
    super();
    
    this.headers.append('Authorization', 'my-token');
    console.log(this.headers);
  }
}

export const requestOptionsProvider = {
  provide: RequestOptions,
  useClass: DefaultRequestOptions
};