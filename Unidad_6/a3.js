        //Definir el objeto Vehículo con su constructor
        function Vehiculo(marca, modelo, color, añoFabricacion) {
            this.marca = marca;
            this.modelo = modelo;
            this.color = color;
            this.añoFabricacion = añoFabricacion;
        }

        //Crear 5 vehículos diferentes
        const vehiculos = [
            new Vehiculo('Toyota', 'Corolla', 'Rojo', 2015),
            new Vehiculo('Ford', 'Focus', 'Azul', 2018),
            new Vehiculo('Honda', 'Civic', 'Negro', 2020),
            new Vehiculo('Audi', 'R8', 'Blanco', 2017),
            new Vehiculo('BMW', 'Serie 3', 'Plata', 2019)
        ];

        //Función para generar la tabla
        function generarTabla() {
            //Obtener el contenedor de la tabla
            const contenedor = document.getElementById('tablaVehiculos');

            //Crear la tabla
            let tabla = document.createElement('table');
            tabla.setAttribute('border', '1');
            tabla.setAttribute('style', 'border-collapse: collapse; width: 100%;');

            //Crear el encabezado de la tabla
            let thead = document.createElement('thead');
            let filaEncabezado = document.createElement('tr');
            let th1 = document.createElement('th');
            th1.textContent = 'Marca';
            let th2 = document.createElement('th');
            th2.textContent = 'Modelo';
            let th3 = document.createElement('th');
            th3.textContent = 'Color';
            let th4 = document.createElement('th');
            th4.textContent = 'Año de Fabricación';

            //Añadir las celdas al encabezado
            filaEncabezado.appendChild(th1);
            filaEncabezado.appendChild(th2);
            filaEncabezado.appendChild(th3);
            filaEncabezado.appendChild(th4);
            thead.appendChild(filaEncabezado);
            tabla.appendChild(thead);

            //Crear el cuerpo de la tabla (tbody)
            let tbody = document.createElement('tbody');

            //Añadir los vehículos a la tabla
            vehiculos.forEach(function(vehiculo) {
                let fila = document.createElement('tr');

                let celdaMarca = document.createElement('td');
                celdaMarca.textContent = vehiculo.marca;
                fila.appendChild(celdaMarca);

                let celdaModelo = document.createElement('td');
                celdaModelo.textContent = vehiculo.modelo;
                fila.appendChild(celdaModelo);

                let celdaColor = document.createElement('td');
                celdaColor.textContent = vehiculo.color;
                fila.appendChild(celdaColor);

                let celdaAño = document.createElement('td');
                celdaAño.textContent = vehiculo.añoFabricacion;
                fila.appendChild(celdaAño);

                tbody.appendChild(fila);
            });

            //Añadir el cuerpo a la tabla
            tabla.appendChild(tbody);

            //Añadir la tabla al contenedor
            contenedor.innerHTML = '';  //Limpiar antes de generar la nueva tabla
            contenedor.appendChild(tabla);
        }