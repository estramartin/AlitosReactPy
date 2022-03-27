
from pydantic import BaseModel
from DataBase.DB import Base
from sqlalchemy import Column, Integer,String

class Company(Base):
    __tablename__ = 'datos_empresa'
    codigo = Column( Integer(), primary_key = True)
    direccion = Column(String(100))
    telefono = Column(String(100))
    telefono2 = Column(String(100))
    telefono3= Column(String(100))
    instagram = Column(String(500))
    facebook = Column(String(500))
    email =Column(String(200))

    
    def __str__(self):
        return self.codigo


class companyModel(BaseModel):
    codigo :int
    direccion:str
    telefono :str
    telefono2 :str
    telefono3 : str
    instagram :str
    facebook: str
    email :str

    
    class Config:
        orm_mode = True