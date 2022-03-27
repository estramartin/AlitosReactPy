from typing import Optional
from sqlalchemy.sql.sqltypes import  Integer
from DataBase.DB import Base
from sqlalchemy import Column, Integer,String

from pydantic import BaseModel


class ImgCarrousel(Base):
    __tablename__ = 'imagenes'
    codigo= Column(Integer, autoincrement=True, primary_key=True )
    nombre= Column(String(200))
    imagen =Column(String(200))
    

    def __str__(self):
        return self.nombre


class ImgModel(BaseModel):
    codigo: int
    nombre: str
    imagen: Optional[str]

    class Config:
        orm_mode = True