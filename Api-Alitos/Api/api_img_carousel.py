from os import getcwd
from fastapi import APIRouter,UploadFile,File
from fastapi.responses import FileResponse
from fastapi.params import Depends
from starlette.responses import Response
from Models.img_carrousel import ImgModel
from sqlalchemy.orm.session import Session
from Repository.ImgCarousel_repo import ImgRepo
from DataBase.DB import get_session
from typing import List


repo = ImgRepo()

carousel_router = APIRouter(prefix='/img', tags=['Imagenes_Carousel'])


@carousel_router.post('/upload')
async def upload_file(file: UploadFile= File(...), session: Session=Depends(get_session)):
    ruta = getcwd()+'/assets/' + file.filename
    with open(ruta, "wb" ) as myfile:
      content =  await file.read()  
      myfile.write(content)
      myfile.close()
    return repo.upload_file(file.filename, ruta, session)
  


@carousel_router.get('/file/{codigo}')
def get_file(codigo: int, session:Session=Depends(get_session)):
    imgurl = repo.get_file(codigo, session)
    return FileResponse(imgurl)


@carousel_router.get('/file-all/')
def get_all_images(session: Session= Depends(get_session)):
  imagenes = repo.get_all_images(session)
  
  for a in imagenes:
   return FileResponse(a)

