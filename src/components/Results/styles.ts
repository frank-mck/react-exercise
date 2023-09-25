import styled from "styled-components";
import { Badge, Box } from "@cruk/cruk-react-components"

export const GidColumnWrapper = styled(Box)`
  display: grid;
  grid-template-columns: auto auto;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 12px;
`;

export const JustifiedBetweenWrapper = styled(Box)`
  display: flex;
  justify-content: space-between;
`;

export const StyledBadge = styled(Badge)`
margin: 0 0 4px 4px;
`