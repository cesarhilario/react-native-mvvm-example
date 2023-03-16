export interface HomeViewProps {
  handleGetRepository: () => void;
  handleGetStars: () => void;
  handleGetForks: () => void;
  stars: number;
  forks: number;
  buttonsEnabled: boolean;
}
