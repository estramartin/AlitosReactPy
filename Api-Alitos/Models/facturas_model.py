
from datetime import datetime
from typing import Optional

from pydantic.main import BaseModel
from sqlalchemy.orm import relationship
from DataBase.DB import Base
from sqlalchemy import Column, Integer, ForeignKey, DateTime




class Facturas(Base):
    __tablename__='facturas'
    codigo_cliente =Column(Integer(),ForeignKey('clientes.codigo'),nullable=False)
    numero_factura = Column (Integer(), autoincrement=True , primary_key= True)
    fecha = Column(DateTime(), default= datetime.now())
    codigo_cli_rel = relationship('Clientes')
    
    def __str__(self):
        return self.numero_factura

class FacturasItems(Base):
    __tablename__= 'facturas_items'
    codigo_pk = Column(Integer(), autoincrement=True, primary_key=True)
    codigo_articulo =  Column(Integer(), ForeignKey('producto.codigo'), nullable=False)
    numero_factura =  Column(Integer(), ForeignKey('facturas.numero_factura'), nullable=False)
    cantidad = Column(Integer(), nullable=False)
    codigo_art_rel =  relationship('Productos')
    numero_fac_rel = relationship('Facturas')

    def __str__(self):
        return self.numero_factura


class FacturasModel(BaseModel):
    codigo_cliente: int
    numero_factura: Optional[int]
    fecha : datetime
    class Config:
        orm_mode = True



class FacturasItemsModel(BaseModel):
    codigo_pk: Optional[int]
    codigo_articulo: int
    numero_factura: int
    cantidad: int
    
    class Config:
        orm_mode = True