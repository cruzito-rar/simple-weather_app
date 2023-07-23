export const Icons = (icon) => {
 switch(icon) {
  case 'Thunderstorm':
   icon = '../icons/thunderstrorm.svg';
  break;
  case 'Drizzle':
   icon = '../icons/drizzle.svg';
  break;
  case 'Rain':
   icon = '../icons/rain.svg';
  break;
  case 'Snow':
   icon = '../icons/snow.svg';
  break;
  case 'Clear':
   icon = '../icons/clear-day.svg';
  break;
  case 'Atmosphere':
   icon = '../icons/weather.svg';
  break;
  case 'Clouds':
   icon = '../icons/fog.svg';
  break;
  case 'Fog':
  icon = '../icons/fog.svg';
  break;
  case 'Haze':
  icon = '../icons/fog.svg';
  break;
  case 'Smoke':
  icon = '../icons/fog.svg';
  break;
  default:
  icon = '../icons/clear-day.svg';
  }
 return icon;
}