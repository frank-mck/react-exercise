import styled from "styled-components";
import { Badge, Box } from "@cruk/cruk-react-components"

export const GridColumnWrapper = styled(Box)`
  display: grid;
  grid-template-columns: auto auto;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 12px;

  @media (max-width: 768px) {
    grid-template-columns: auto;
  }
`;

export const JustifiedBetweenWrapper = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledBadge = styled(Badge)`
margin: 0 0 4px 4px;
`

export const StyledAudio = styled.audio`
  border-radius: 50px;
  outline: 4px solid darkgray;
  width: 100%;
  min-width: 300px;
`