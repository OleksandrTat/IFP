namespace Practica1
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();

            // Deshabilitar el cambio de tamaño
            this.FormBorderStyle = FormBorderStyle.FixedDialog;
            this.MaximizeBox = false;  // Deshabilitar el botón de maximizar
            this.MinimizeBox = false;  // Deshabilitar el botón de minimizar si lo deseas
            this.ControlBox = false;
        }

        private void button1_Click(object sender, EventArgs e)
        {
            // Obtener los valores de los TextBox
            try
            {
                double numero1 = Convert.ToDouble(textBox1.Text);
                double numero2 = Convert.ToDouble(textBox2.Text);
                double resultado = 0;

                // Verificar cuál RadioButton está seleccionado y realizar la operación
                if (radioButton1.Checked) // Sumar
                {
                    resultado = numero1 + numero2;
                }
                else if (radioButton2.Checked) // Restar
                {
                    resultado = numero1 - numero2;
                }
                else if (radioButton3.Checked) // Multiplicar
                {
                    resultado = numero1 * numero2;
                }

                // Mostrar el resultado en el Label
                labelResultado.Text = "Resultado: " + resultado.ToString();
            }
            catch (FormatException)
            {
                // En caso de error en la conversión, mostrar un mensaje
                MessageBox.Show("Por favor, introduce números válidos.", "Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
            }
        }

        private void Form1_Load(object sender, EventArgs e)
        {
            // Aquí puedes inicializar valores o configuraciones si es necesario
        }

        private void radioButton2_CheckedChanged(object sender, EventArgs e)
        {
            // Código para manejar eventos del segundo RadioButton si es necesario
        }

        private void groupBox1_Enter(object sender, EventArgs e)
        {
            // Código para manejar eventos del GroupBox si es necesario
        }

        private void label1_Click(object sender, EventArgs e)
        {

        }

        private void radioButton1_CheckedChanged(object sender, EventArgs e)
        {

        }

        private void radioButton3_CheckedChanged(object sender, EventArgs e)
        {

        }

        private void toolStripButton1_Click(object sender, EventArgs e)
        {

        }

        private void textBox2_TextChanged(object sender, EventArgs e)
        {

        }

        private void toolStripButton2_Click(object sender, EventArgs e)
        {

        }
    }
}
