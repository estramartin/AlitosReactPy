
from sqlalchemy.sql.sqltypes import Boolean
from DataBase.DB import Base
from pydantic import BaseModel
from sqlalchemy.orm import relationship
from sqlalchemy import Column, Integer,String, ForeignKey

class TipoProductos(Base):
    __tablename__= 'tipo_productos'
    codigo= Column(Integer(), primary_key= True, nullable=False)
    nombre= Column(String(30), nullable=False)
    
    def __str__(self):
        return self.nombre


class Productos(Base):
    __tablename__ = 'producto'
    codigo_tipo= Column( Integer(), ForeignKey('tipo_productos.codigo'),autoincrement=True ,nullable=False)
    codigo = Column(Integer(), primary_key=True, nullable=False )
    gusto = Column(String(30), nullable= False )
    tamanio = Column(String(30), nullable=False)
    precio = Column(Integer())
    activado = Column(Boolean(), default=True)
   
    tipo = relationship("TipoProductos")

    def __str__(self):
        return self.gusto


class ProductTypeModel(BaseModel):

    codigo: int
    nombre: str

    class Config:
        orm_mode = True

class ProductModel(BaseModel):
    codigo_tipo:int
    codigo :int
    gusto : str
    tamanio: str
    precio: str
    activado: bool
    class Config:
        orm_mode = True