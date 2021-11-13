const user = { nombre, edad, 
    location: {x, y, city:{zipcode, ldl}}};

    const zipcode = user && user.location 
    && user.location.city 
    && user.location.city.zipcode
    console.log(zipcode)

    const zipcode1 = user?.location?.city?.zipcode;
    console.log(zipcode1)
