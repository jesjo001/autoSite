import styled from 'styled-components'
import {
  Stack,
  Box,
  Button
} from '@mui/material';

function Home() {
  return (
    <Container>
      <ContainerRow>
        <SectionColumn>
          <h3 style={{ fontSize: '2.2em', width: 300, paddingBotton: 0, marginBottom: 10,}}>
            SaaS Delivery Management Software
          </h3>
          <div>Track and optimize routes in real-time </div>
          <SectionRow style={{ paddingTop: 10}}>
            <Button variant="contained" style={{ color:"white", backgroundColor: "orange", fontSize: '0.9em', borderRadius: 6, fontWeight: 600, height: 40 }}>Get Started</Button>

          </SectionRow>
        </SectionColumn>
        <SectionColumn>
          {/*<img src={} />*/}
        </SectionColumn>
        
      </ContainerRow>
      <ContainerRow>
        <h4>Solution for every delivery</h4>
      </ContainerRow>

      
    </Container>
  );
}

export default Home;

const Container = styled.div`
  display: flex;
  flex-direction:column;
  margin-top: 0px;
  padding-top:0px;
  padding-left:10px;
  background-image: url(/assets/vector.png) ;
  background-repeat: no-repeat;
  background-size: contain;
  min-height: 1200px;
`

const ContainerRow = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: center;
  height: 400px;
  margin: 10px;
`

const SectionColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
`


const SectionRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  color: white;
`
