const operacionflechita = (name, sex) => {
    name = document.getElementById('name').value;
    sex = document.getElementById('sex').value;
    document.getElementById('mensaje').innerHTML = sex == "Hombre" ? (`Bienvenido ${name}`) : (`Bienvenida ${name}`);
}