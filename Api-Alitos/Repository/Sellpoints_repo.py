from sqlalchemy.orm.session import Session
from sqlalchemy.sql.expression import  select
from Models.sellpoints_model import SellPoints, sellPointsModel

class Sellpoints():

    def get_all(self ,session:Session):
      puntos = session.query(SellPoints).order_by(SellPoints.codigo).all()
      return puntos

    def get_by_id(self , codigo: int, session:Session):
      sellpoint= session.get(SellPoints,codigo)
      return sellpoint

    def get_by_name(self, nombre:str, session:Session):
        return session.execute(select(SellPoints).where(SellPoints.nombre.ilike(f'%{nombre}%'))).scalars().all()

    def add_sellpoint(self, session:Session, datos: sellPointsModel):
       sellpoint = SellPoints( nombre = datos.nombre, direccion = datos.direccion, localidad = datos.localidad,slogan = datos.slogan)
       session.add(sellpoint)
       session.commit()
       return sellpoint 

    def delete_sellpoint(self, codigo: int,session:Session):
        sell_point = session.get(SellPoints, codigo)
        session.delete(sell_point)
        session.commit()
        return "Cliente borrado satisfactoriamente"
        
    def update_sellpoint(self, codigo: int, datos: sellPointsModel, session: Session):
        sellpoint = session.get(SellPoints, codigo )

        try:
          sellpoint.direccion = datos.direccion
          sellpoint.nombre = datos.nombre
          sellpoint.localidad = datos.localidad
          sellpoint.slogan = datos.slogan
          session.commit()

        except:
          raise 'No se Dio'

        return sellpoint
