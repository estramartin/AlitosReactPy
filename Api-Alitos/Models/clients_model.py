
from DataBase.DB import Base
from sqlalchemy import Column, Integer, String
from pydantic import BaseModel



class Clientes(Base):
    __tablename__='clientes'
    codigo = Column (Integer(), autoincrement=True, primary_key= True)
    nombre  = Column (String(100), nullable=False)
    password = Column(String(50), nullable=False)
    email = Column (String(50), nullable=False, unique=True)
    telefono= Column (String(100), nullable=True)
    cuil= Column (String(40), nullable=True)
    dni = Column (Integer(), nullable=True)
    def __str__(self):
        return self.nombre


class ClientsModel(BaseModel):
    codigo:int
    nombre:str
    password: str
    email: str
    telefono: str
    cuil:str
    dni : int

    class Config:
     orm_mode = True