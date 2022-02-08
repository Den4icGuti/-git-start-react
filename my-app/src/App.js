import PaintingList from './components/paintingsList';
import painting from './painting.json';
import AlertWindow from './Alert/Alert';
import Container from './Container/Container';
import Box from './Box/Box'
// import Section from './components/Section';
// import ColorPeacker from './ColorPiacker/ColorPeacker';
//====Создаем главный компонет в файле App.js====//


export default function App() { 
  return (
    <div>
      <Box type="small" className='big green' styles={{ color: '#ffff',fontSize:40 }} />
      <Box type="medium" />
       <Box type="large"/>
      <Container>
        <PaintingList item={painting}/>
       <AlertWindow text='Green' type='success' />
       <AlertWindow text='Orange' type='warning' />
       <AlertWindow text='Red'  type='error'/>
      </Container>
     {/* <ColorPeacker options={colorPeackerOptions}/> */}
</div>
  ); 
}


// const colorPeackerOptions = [
//   { label: 'red', color: '#F44336' },
//   { label: 'green', color: '#4CAF50' },
//   { label: 'blue', color: '#2196F3' },
//   { label: 'grey', color: '#607D8B' }
// ];