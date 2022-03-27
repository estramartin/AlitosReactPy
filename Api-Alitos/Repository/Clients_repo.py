from sqlalchemy.orm.session import Session
from sqlalchemy import select
from Models.clients_model import Clientes, ClientsModel


class ClientsRepository():

    def all_clients(self, session: Session):
        return session.query(Clientes).order_by(Clientes.codigo).all()
     
    def get_by_id(self, codigo: int, session: Session):
        return session.execute(select(Clientes).where(Clientes.codigo == codigo)).scalar()

    def get_by_nombre(self, nombre:str, session:Session):
        return session.execute(select(Clientes).where(Clientes.nombre.ilike(f'%{nombre}%'))).scalars().all()
    
    def add_client(self, datos: ClientsModel, session:Session):
        cliente= Clientes(nombre = datos.nombre, password = datos.password, email = datos.email, telefono = datos.telefono, cuil=datos.cuil, dni= datos.dni )
        session.add(cliente)
        session.commit()
        return cliente    

    def delete_client(self, codigo: int, session:Session):
        cliente= session.get(Clientes, codigo)
        session.delete(cliente)
        session.commit()
        return "Cliente borrado satisfactoriamente"

    def update_client(self, codigo: int, datos:ClientsModel, session: Session):
        cliente = session.get(Clientes,codigo)    

        try:
            cliente.nombre = datos.nombre
            cliente.password = datos.password
            cliente.email = datos.email
            cliente.telefono = datos.telefono
            cliente.cuil = datos.cuil
            cliente.dni = datos.dni
            session.commit()
        except: raise "Error"

        return cliente
