import styled, { withTheme } from 'styled-components';
import { useTheme } from './ThemeContext';
import Toggle from 'react-toggle';

const Wrapper = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: auto;
`;

const Label = styled.span`
  font-size: .7rem;
  line-height: 1;
  text-transform: uppercase;
  margin-right: .5rem;
  letter-spacing: .5px;
`;

const Lightswitch = (props) => {
  const themeToggle = useTheme();

  return(
    <Wrapper>
      <Label>
        { props.theme.mode === 'light'
          ? "Lights on"
          : "Lights off"
        }
      </Label>
      <Toggle
        defaultChecked={props.theme.mode === 'light' ? true : false}
        icons={false}
        onChange={() => themeToggle.toggle()} />
    </Wrapper>
  );
}

export default withTheme(Lightswitch);