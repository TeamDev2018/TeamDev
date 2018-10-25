import { TeamCarouselModule } from './team-carousel.module';

describe('TeamCarouselModule', () => {
  let teamCarouselModule: TeamCarouselModule;

  beforeEach(() => {
    teamCarouselModule = new TeamCarouselModule();
  });

  it('should create an instance', () => {
    expect(teamCarouselModule).toBeTruthy();
  });
});
