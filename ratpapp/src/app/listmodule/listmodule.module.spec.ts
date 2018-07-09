import { ListmoduleModule } from './listmodule.module';

describe('ListmoduleModule', () => {
  let listmoduleModule: ListmoduleModule;

  beforeEach(() => {
    listmoduleModule = new ListmoduleModule();
  });

  it('should create an instance', () => {
    expect(listmoduleModule).toBeTruthy();
  });
});
