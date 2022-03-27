
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from DataBase import DB
import uvicorn
from Api.api_clients import clients_router
from Api.api_company import company_router
from Api.api_facturas import facturas_router
from Api.api_productos import products_router
from Api.api_sellpoints import sellpoints_router
from Api.api_img_carousel import carousel_router
from Api.api_message import message_router

app = FastAPI(title = 'Alitos Api',
             description='Desarrollando la Api de Alitos',
             version= '1.0.1'  )


app.include_router(clients_router)
app.include_router(company_router)
app.include_router(facturas_router)
app.include_router(products_router)
app.include_router(sellpoints_router)
app.include_router(carousel_router)
app.include_router(message_router)

origins = [  "http://localhost:3000"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
    

)


# DB.drop_all()
# DB.create_all()

if __name__ == '__main__':
    uvicorn.run("main:app", reload = True)
   
   

