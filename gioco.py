import tkinter as tk


def show_hide(num):
    global s1
    global s2
    global s3
    global s4
    if num==1:
        if button1.cget("text")=="Nascondi!":
            button1.configure(text="Mostra!")
            s1 = entry1.get()
            entry1.delete(0, tk.END)
            entry1.insert(0, "********")
        elif button1.cget("text")=="Mostra!":
            button1.configure(text="Nascondi!")
            entry1.delete(0, tk.END)
            entry1.insert(0, s1)
    elif num==2:
        if button2.cget("text")=="Nascondi!":
            button2.configure(text="Mostra!")
            s2 = entry2.get()
            entry2.delete(0, tk.END)
            entry2.insert(0, "********")
        elif button2.cget("text")=="Mostra!":
            button2.configure(text="Nascondi!")
            entry2.delete(0, tk.END)
            entry2.insert(0, s2)
    elif num==3:
        if button3.cget("text")=="Nascondi!":
            button3.configure(text="Mostra!")
            s3 = entry3.get()
            entry3.delete(0, tk.END)
            entry3.insert(0, "********")
        elif button3.cget("text")=="Mostra!":
            button3.configure(text="Nascondi!")
            entry3.delete(0, tk.END)
            entry3.insert(0, s3)
    elif num==4:
        if button4.cget("text")=="Nascondi!":
            button4.configure(text="Mostra!")
            s4 = entry4.get()
            entry4.delete(0, tk.END)
            entry4.insert(0, "********")
        elif button4.cget("text")=="Mostra!":
            button4.configure(text="Nascondi!")
            entry4.delete(0, tk.END)
            entry4.insert(0, s4)

    elif num==5:
        labelend.configure(text=s1+" e "+s2+" "+s3+" "+s4)
    
    
        
        


if __name__=="__main__":
    # Crea l'istanza della finestra principale
    window = tk.Tk()

    # Imposta il titolo della finestra
    window.title("Lets Play!")

    # Imposta le dimensioni della finestra
    window.geometry("400x350")


    # Crea una etichetta
    label1 = tk.Label(window, text="Inserisci il primo nome!")
    label1.pack()

    # Crea una casella di testo
    s1 = ""
    entry1 = tk.Entry(window)
    entry1.pack()

    # Crea un pulsante
    button1 = tk.Button(window, text="Nascondi!")
    button1.pack()

    button1.configure(command= lambda : show_hide(1))



    # Crea una etichetta
    label2 = tk.Label(window, text="Inserisci il secondo nome!")
    label2.pack()

    # Crea una casella di testo
    s2 = ""
    entry2 = tk.Entry(window)
    entry2.pack()

    # Crea un pulsante
    button2 = tk.Button(window, text="Nascondi!")
    button2.pack()

    button2.configure(command= lambda : show_hide(2))


    # Crea una etichetta
    label3 = tk.Label(window, text="Inserisci la situazione!")
    label3.pack()

    # Crea una casella di testo
    s3 = ""
    entry3 = tk.Entry(window)
    entry3.pack()

    # Crea un pulsante
    button3 = tk.Button(window, text="Nascondi!")
    button3.pack()

    button3.configure(command= lambda : show_hide(3))


    # Crea una etichetta
    label4 = tk.Label(window, text="Inserisci il luogo!")
    label4.pack()

    # Crea una casella di testo
    s4 = ""
    entry4 = tk.Entry(window)
    entry4.pack()

    # Crea un pulsante
    button4 = tk.Button(window, text="Nascondi!")
    button4.pack()

    button4.configure(command= lambda : show_hide(4))


    labelend = tk.Label(window, text="")
    
    end = ""
    buttonend = tk.Button(window, text="Mostra risultato!")
    buttonend.pack()

    buttonend.configure(command= lambda : show_hide(5))

    labelend.pack()

    empty_label = tk.Label(window, text="")
    empty_label.pack()

    window.mainloop()

