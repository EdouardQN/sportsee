export default async function fetchData (url){
  try {
      const response = await fetch(url);
      //soit url, soit fichier json
      
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();
      return result;
  } catch (error) {
      console.error('Error fetching data:', error);
    }

};