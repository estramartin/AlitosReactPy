from sqlalchemy import select,column
from sqlalchemy.orm.session  import Session
from Models.product_model import Productos, TipoProductos, ProductModel


class ProductsRepo:
    def all_products(self, session: Session):
     productos = session.query( Productos, TipoProductos ).join(TipoProductos).order_by(Productos.tamanio).all()
     return productos
    
    def get_by_id(self, codigo: int, session: Session):
        return session.query(Productos, TipoProductos).join(TipoProductos).filter(codigo == Productos.codigo).all()

    def get_by_name(self, gusto: str, session:Session):
        product= session.query(Productos,TipoProductos).join(Productos).where(Productos.gusto.ilike(f'%{gusto}%')).all()
        return product
    
    def create_product(self, session: Session, datos: ProductModel ):
       producto = Productos(codigo_tipo = datos.codigo_tipo, gusto = datos.gusto, tamanio = datos.tamanio, precio = datos.precio, activado = True )
       session.add(producto)
       session.commit()
        
       return producto

    def delete_product(self,codigo: int, session: Session):
        producto = session.get(Productos, codigo)
        session.delete(producto)
        session.commit()
        return 'Producto Borrado exitosamente!'

    def update_producto(self, codigo: int, datos: ProductModel, session: Session):
        
        producto = session.get(Productos, codigo)
        try:
            producto.gusto = datos.gusto
            producto.precio = datos.precio
            producto.tamanio = datos.tamanio
            producto.codigo_tipo = datos.codigo_tipo 
            producto.activado = datos.activado

            session.commit()
        except:
          raise 'No se Dio'   

        return producto

    def get_tastes(self, session:Session):
        return session.query(TipoProductos).all()
