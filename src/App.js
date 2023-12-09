import { Tweet } from 'react-tweet';
import { Box, Button } from '@chakra-ui/react';
import HomePage from './pages/Home.page';
import "./styles/global.css";

function App() {
  return (
    <Box className="App" bgGradient='linear(to-l, #E5F3FE, #E0E9F5)'>
      {/* <Tweet id={"1726105951005188343"} /> */}
      <HomePage />
    </Box>
  );
}

export default App;