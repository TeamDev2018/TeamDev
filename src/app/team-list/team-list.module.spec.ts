import { TeamListModule } from './team-list.module';

describe('TeamListModule', () => {
  let teamListModule: TeamListModule;

  beforeEach(() => {
    teamListModule = new TeamListModule();
  });

  it('should create an instance', () => {
    expect(teamListModule).toBeTruthy();
  });
});
