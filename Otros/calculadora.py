import tkinter as tk
from tkinter import font

class Calculadora:
    def __init__(self, ventana):
        self.ventana = ventana
        self.ventana.title("Calculadora")
        self.ventana.geometry("400x500")
        self.ventana.resizable(False, False)
        
        # Variable para almacenar la expresión
        self.expresion = tk.StringVar()
        
        # Crear la pantalla de entrada
        self.crear_pantalla()
        
        # Crear los botones
        self.crear_botones()
    
    def crear_pantalla(self):
        """Crea la pantalla de entrada de la calculadora"""
        pantalla = tk.Entry(
            self.ventana,
            textvar=self.expresion,
            font=("Arial", 24),
            borderwidth=2,
            relief=tk.SUNKEN,
            justify=tk.RIGHT
        )
        pantalla.pack(fill=tk.BOTH, padx=10, pady=10)
    
    def crear_botones(self):
        """Crea todos los botones de la calculadora"""
        # Marco para los botones
        marco_botones = tk.Frame(self.ventana)
        marco_botones.pack(fill=tk.BOTH, expand=True, padx=10, pady=10)
        
        # Definir los botones en una matriz
        botones = [
            ['7', '8', '9', '/'],
            ['4', '5', '6', '*'],
            ['1', '2', '3', '-'],
            ['0', '.', '=', '+'],
            ['Limpiar', 'Retroceso']
        ]
        
        # Crear los botones
        for fila_idx, fila in enumerate(botones):
            for col_idx, boton_texto in enumerate(fila):
                self.crear_boton(
                    marco_botones,
                    boton_texto,
                    fila_idx,
                    col_idx,
                    len(fila)
                )
    
    def crear_boton(self, marco, texto, fila, columna, columnas_en_fila):
        """Crea un botón individual"""
        # Definir colores según el tipo de botón
        if texto in ['=', '+', '-', '*', '/']:
            color = '#FF9500'
            color_texto = 'white'
        elif texto in ['Limpiar', 'Retroceso']:
            color = '#FF3B30'
            color_texto = 'white'
        else:
            color = '#E5E5E5'
            color_texto = 'black'
        
        # Crear el botón
        boton = tk.Button(
            marco,
            text=texto,
            font=("Arial", 18),
            bg=color,
            fg=color_texto,
            activebackground='#888888',
            border=1,
            command=lambda: self.al_hacer_clic(texto)
        )
        
        # Posicionar el botón en la cuadrícula
        if columnas_en_fila == 2:
            # Para la última fila de 2 botones
            boton.grid(row=fila, column=columna, sticky='nsew', padx=5, pady=5, columnspan=2)
        else:
            boton.grid(row=fila, column=columna, sticky='nsew', padx=5, pady=5)
        
        # Configurar pesos para que los botones se expandan
        marco.grid_rowconfigure(fila, weight=1)
        marco.grid_columnconfigure(columna, weight=1)
    
    def al_hacer_clic(self, boton):
        """Maneja el clic en los botones"""
        expresion_actual = self.expresion.get()
        
        if boton == '=':
            try:
                resultado = eval(expresion_actual)
                self.expresion.set(str(resultado))
            except:
                self.expresion.set('Error')
        elif boton == 'Limpiar':
            self.expresion.set('')
        elif boton == 'Retroceso':
            self.expresion.set(expresion_actual[:-1])
        else:
            self.expresion.set(expresion_actual + boton)

# Crear la ventana principal
if __name__ == '__main__':
    ventana = tk.Tk()
    calculadora = Calculadora(ventana)
    ventana.mainloop()
