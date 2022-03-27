from datetime import date, datetime
from typing import Text
from pydantic import BaseModel
from sqlalchemy import Column,DateTime
from sqlalchemy.sql.sqltypes import Integer,String
from DataBase.DB import Base


class Message(Base):
    __tablename__='mensajes'
    codigo= Column(Integer(), autoincrement=True, primary_key=True)
    nombre= Column(String(100),nullable=False)
    correo= Column(String(40), nullable=False)
    titulo= Column(String(300), nullable=True)
    mensaje= Column(String)
    fecha = Column(DateTime(), default= datetime.now())
    def __str__(self):
        return self.nombre


class MessageModel(BaseModel):
    codigo: int
    nombre: str
    correo:str
    titulo :str
    mensaje: str
    fecha: datetime
    
    class Config:
        orm_mode:True