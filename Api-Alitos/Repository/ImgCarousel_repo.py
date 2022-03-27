from sqlalchemy import select

from sqlalchemy.orm.session import Session
from Models.img_carrousel import ImgCarrousel, ImgModel
from os import getcwd
import os

class ImgRepo:

    def upload_file(self, nombre:str, ruta:str ,session:Session):
      
        imagen = ImgCarrousel(nombre = nombre, imagen = ruta)
        session.add(imagen)
        session.commit()
        return imagen

    def get_file(self, codigo:int, session:Session):

        imagenurl = session.execute(select(ImgCarrousel.imagen).where(ImgCarrousel.codigo == codigo)).scalar()
        return imagenurl

    
    def get_all_images(self, session:Session):

        imagenes = session.execute(select(ImgCarrousel.imagen)).scalars().all()
        return imagenes
