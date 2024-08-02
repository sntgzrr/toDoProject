# How to run the application
1. For run the application you have to create the executable file (.jar) in the /back folder, use this Maven command:
```shell
  mvn package -DskipTests
``` 
2. Then you have to use this Docker command at the root of the project to create application images and the container: 
```shell
  docker-compose up --build
```
3. Once you have run this command, you will have to go to the url: [http://localhost:5173](http://localhost:5173) and you will see the application running:
   [![Captura.png](https://i.postimg.cc/Bn42WQjd/Captura.png)](https://postimg.cc/4m2YVGb5)
4. Create, Read, Update and Delete your tasks!
