import React,{useState} from 'react';
import './App.css';
import Grid from '@material-ui/core/Grid'
import { Button } from '@material-ui/core';


function App() {
  const initialState = {
    aspek_penilaian_1: {
      mahasiswa_1: 1,
      mahasiswa_2: 1,
      mahasiswa_3: 1,
      mahasiswa_4: 1,
      mahasiswa_5: 1,
      mahasiswa_6: 1,
      mahasiswa_7: 1,
      mahasiswa_8: 1,
      mahasiswa_9: 1,
      mahasiswa_10: 1
    },
    aspek_penilaian_2: {
      mahasiswa_1: 1,
      mahasiswa_2: 1,
      mahasiswa_3: 1,
      mahasiswa_4: 1,
      mahasiswa_5: 1,
      mahasiswa_6: 1,
      mahasiswa_7: 1,
      mahasiswa_8: 1,
      mahasiswa_9: 1,
      mahasiswa_10: 1
    },
    aspek_penilaian_3:{
      mahasiswa_1: 1,
      mahasiswa_2: 1,
      mahasiswa_3: 1,
      mahasiswa_4: 1,
      mahasiswa_5: 1,
      mahasiswa_6: 1,
      mahasiswa_7: 1,
      mahasiswa_8: 1,
      mahasiswa_9: 1,
      mahasiswa_10: 1
    },
    aspek_penilaian_4:{
      mahasiswa_1: 1,
      mahasiswa_2: 1,
      mahasiswa_3: 1,
      mahasiswa_4: 1,
      mahasiswa_5: 1,
      mahasiswa_6: 1,
      mahasiswa_7: 1,
      mahasiswa_8: 1,
      mahasiswa_9: 1,
      mahasiswa_10: 1
    }
}

const mahasiswa = [1,2,3,4,5,6,7,8,9,10];
const aspek = [1,2,3,4];
const nilaiList = [1,2,3,4,5,6,7,8,9,10];

const [nilai, setNilai] = useState(initialState);
const [showOutput, setShowOutput] = useState(false);

const updateData = (siswa, hasilNilai, value) => {
  setShowOutput(false);
  let result = {...nilai};
  let aspekNilai = 'aspek_penilaian_' + hasilNilai;
  let siswaId = 'mahasiswa_' + siswa;
  result[aspekNilai][siswaId] = parseInt(value);
  setNilai(result);
  console.log(result);
}

const getData = (e, hasilNilai, siswa) => {
  updateData(siswa,hasilNilai, e.target.value)
}

const submitData = () => {
  setShowOutput(true);
}



  return (
    <>
      <div>
        <Grid container spacing={2} style={{marginLeft:"7px"}}>
            <Grid item xs={3}></Grid>
            <Grid item xs={2}>
              Aspek Penilaian 1
            </Grid>
            <Grid item xs={2}>
              Aspek Penilaian 2
            </Grid>
            <Grid item xs={2}>
              Aspek Penilaian 3
            </Grid>
            <Grid item xs={2}>
              Aspek Penilaian 4
            </Grid>
          </Grid>
            {
              mahasiswa.map((item,key)=>(
                <div className='mahasiswa_container'>
                  <label key={key}>
                    Mahasiswa {item}
                  </label>
                 {aspek.map((aspek,key2)=>(
                   <select key={key2} onChange={(e)=>getData(e,aspek,item)}>
                     {nilaiList.map((nilai,key3)=>(
                       <option key={key3} value={nilai}>{nilai}</option>
                     ))}
                   </select>
                 ))}
                </div>
              ))
            }
            <Button variant="contained" style={{marginLeft:"45%"}} onClick={submitData}>Submit</Button>
            {
              showOutput &&
              <div>
                  <div><pre>{JSON.stringify(nilai,null,2)}</pre></div>
              </div>
            }
      </div>
    </>
  );
}

export default App;
