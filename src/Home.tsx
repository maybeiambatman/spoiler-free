import { Autocomplete } from '@mui/material';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import './Home.css';

const leagues = [
    {
        label: 'NFL'
    },
    {
        label: 'PGA'
    },
];

export function Home() {
    return (
        <Container maxWidth='sm' className='main-container'>
            <h1>Spoiler Free</h1>
            <Autocomplete
                options={leagues}
                renderInput={(params) => <TextField {...params} label="League" />}
            />
            <p> Follow your favorite league at your own pace avoiding all spoilers. Choose a league to get started!  </p>
        </Container>
    );
}