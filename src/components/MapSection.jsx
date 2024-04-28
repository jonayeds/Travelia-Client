
import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";
import { Marker, Popup} from "react-leaflet";
import  'leaflet/dist/leaflet.css'
import { Icon } from "leaflet";
import  pin from '../assets/pin.png'
const MapSection = () => {
    const markers = [
        {
            geocode: [15.8700, 100.9925],
            popUp:'Thailand' 
        },
        {
            geocode: [23.6850, 90.3563],
            popUp:'Bangladesh' 
        },
        {
            geocode: [4.2105, 101.9758],
            popUp:'Malaysia' 
        },
        {
            geocode: [14.0583, 108.2772],
            popUp:'Vietnam' 
        },
        {
            geocode: [3.2028, 73.2207],
            popUp:'Maldives' 
        },
        {
            geocode: [12.5657, 104.9910],
            popUp:'Cambodia' 
        }
       ]
       const customIcon = new Icon({
        iconUrl: pin,
        iconSize:  [38,38]
       })
         return (
        <div className="w-full h-[500px] mx-auto my-20 ">
            
          <MapContainer
            center={[12.0583, 108.2772]}
            zoom={4}
            scrollWheelZoom={false}
            className="h-full w-full z-0 rounded-2xl "
          >
            <TileLayer  
                attribution='https://www.openstreetmap.org/#map=9/20.2471/93.2804'
                url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {
                markers.map(marker=> <Marker position={marker.geocode} key={marker.geocode[0]}  icon={customIcon}>
                  <Popup>{marker.popUp}</Popup>
                </Marker>)
            }
          </MapContainer>
    
        </div>
      );
    };

export default MapSection;