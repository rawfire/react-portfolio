import { library } from "@fortawesome/fontawesome-svg-core";
import { 
    faTrash, 
    faSignOutAlt, 
    faEdit, 
    faSpinner,
    faFolderPlus,
    faPhone,
    faAt,
    faMapMarkerAlt,
    faUser,
    faLock
  } from "@fortawesome/free-solid-svg-icons";

  const Icons = () => {
    return library.add(
      faTrash, 
      faSignOutAlt, 
      faEdit, 
      faSpinner, 
      faFolderPlus, 
      faPhone, 
      faAt, 
      faMapMarkerAlt,
      faUser,
      faLock
      );
  };
  export default Icons;