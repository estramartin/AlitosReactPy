
from typing import Optional
from DataBase.DB import Base
from pydantic import BaseModel
from sqlalchemy import Column, Integer, String




class SellPoints(Base):
    __tablename__='puntos_venta'
    codigo = Column(Integer(), autoincrement=True, primary_key= True , nullable= False)
    nombre = Column(String(100), nullable=False)
    direccion = Column(String(250), nullable=False )
    localidad = Column(String(200), nullable=False)
    slogan = Column(String(500))
     
    def __str__(self):
        return self.nombre

class sellPointsModel(BaseModel):
    codigo : int
    nombre : str
    direccion : str
    localidad : str
    slogan : Optional[str] 
    class Config:
        orm_mode = True