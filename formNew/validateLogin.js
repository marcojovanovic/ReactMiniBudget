export default function validateLogin(values){

  let errors = {}

  if(!values.name){


    errors.name = 'Ubaci nesto druze'

  } else if(/^[a-zA-Z]$/g.test(values.name)){

    errors.name = 'login nije validan'
  }


  if(!values.email){


    errors.email = 'Ubaci nesto druze'

  } else if(!/\S+@\S+\.\S+/.test(values.email)){

    errors.email = 'login nije validan'
  }

  if(!values.password){


    errors.password = 'Ubaci nesto druze'

  } else if(values.password.length < 10){

    errors.password = 'login nije validan'
  }



  return errors

  }
  


  