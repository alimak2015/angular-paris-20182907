import { PageNotFoundRoutingModule } from './page-not-found-routing.module';

describe('PageNotFoundRoutingModule', () => {
  let pageNotFoundRoutingModule: PageNotFoundRoutingModule;

  beforeEach(() => {
    pageNotFoundRoutingModule = new PageNotFoundRoutingModule();
  });

  it('should create an instance', () => {
    expect(pageNotFoundRoutingModule).toBeTruthy();
  });
});
