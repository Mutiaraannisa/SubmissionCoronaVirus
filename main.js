import '../component/Global-case.js';
import GlobalDataSource from '../data/Global-data.js';
import "../component/flex-container.js";
import IndonesianDataSource from '../data/data-indonesia.js';

function main() {
    const GlobalCase = document.querySelector('global-case');

    const getData = () => {
      GlobalDataSource.getCovidDataGlobal()
        .then((result) => (GlobalCase.covidDataGlobal = result));
    };
  
    getData();

    const IndonesianCase = document.querySelector('flex-container');
    const getDataIndonesia = () => {
      IndonesianDataSource.getcovidIndonesia()
      .then((result) => (IndonesianCase.covidIndonesia = result));
    };
    getDataIndonesia();
    
  };

  export default main;