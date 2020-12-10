import React, { memo } from 'react';

//Se usa memo para evitar que React renderize de nuevo la clase si no se han realizado cambios en el value.
//Es decir, solo se va a renderizar cuando hayan nuevos cambios.
const Small = memo(({ value }) => ( <small> { value } </small> ));

export default Small;
