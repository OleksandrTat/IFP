namespace Practica1
{
    partial class Form1
    {
        /// <summary>
        ///  Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        ///  Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        ///  Required method for Designer support - do not modify
        ///  the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            System.ComponentModel.ComponentResourceManager resources = new System.ComponentModel.ComponentResourceManager(typeof(Form1));
            button1 = new Button();
            textBox1 = new TextBox();
            textBox2 = new TextBox();
            groupBox1 = new GroupBox();
            radioButton3 = new RadioButton();
            radioButton2 = new RadioButton();
            radioButton1 = new RadioButton();
            backgroundWorker1 = new System.ComponentModel.BackgroundWorker();
            labelResultado = new Label();
            toolStrip1 = new ToolStrip();
            toolStripButton1 = new ToolStripButton();
            toolStripButton2 = new ToolStripButton();
            toolStripButton3 = new ToolStripButton();
            menuStrip1 = new MenuStrip();
            oPERARToolStripMenuItem = new ToolStripMenuItem();
            sortirToolStripMenuItem = new ToolStripMenuItem();
            groupBox1.SuspendLayout();
            toolStrip1.SuspendLayout();
            menuStrip1.SuspendLayout();
            SuspendLayout();
            // 
            // button1
            // 
            button1.BackColor = SystemColors.ButtonHighlight;
            button1.Location = new Point(56, 503);
            button1.Name = "button1";
            button1.Size = new Size(171, 119);
            button1.TabIndex = 0;
            button1.Text = "Operar";
            button1.UseVisualStyleBackColor = false;
            button1.Click += button1_Click;
            // 
            // textBox1
            // 
            textBox1.Location = new Point(98, 161);
            textBox1.Name = "textBox1";
            textBox1.Size = new Size(144, 31);
            textBox1.TabIndex = 1;
            textBox1.Text = "1 NuMe";
            // 
            // textBox2
            // 
            textBox2.Location = new Point(98, 290);
            textBox2.Name = "textBox2";
            textBox2.Size = new Size(144, 31);
            textBox2.TabIndex = 2;
            textBox2.Text = "NUm2";
            textBox2.TextChanged += textBox2_TextChanged;
            // 
            // groupBox1
            // 
            groupBox1.BackColor = SystemColors.ButtonHighlight;
            groupBox1.Controls.Add(radioButton3);
            groupBox1.Controls.Add(radioButton2);
            groupBox1.Controls.Add(radioButton1);
            groupBox1.Location = new Point(348, 114);
            groupBox1.Name = "groupBox1";
            groupBox1.Size = new Size(307, 221);
            groupBox1.TabIndex = 3;
            groupBox1.TabStop = false;
            groupBox1.Text = "Operaciones";
            groupBox1.Enter += groupBox1_Enter;
            // 
            // radioButton3
            // 
            radioButton3.AutoSize = true;
            radioButton3.Location = new Point(61, 141);
            radioButton3.Name = "radioButton3";
            radioButton3.Size = new Size(139, 29);
            radioButton3.TabIndex = 2;
            radioButton3.TabStop = true;
            radioButton3.Text = "X (multiplica)";
            radioButton3.UseVisualStyleBackColor = true;
            radioButton3.CheckedChanged += radioButton3_CheckedChanged;
            // 
            // radioButton2
            // 
            radioButton2.AutoSize = true;
            radioButton2.Location = new Point(61, 106);
            radioButton2.Name = "radioButton2";
            radioButton2.Size = new Size(98, 29);
            radioButton2.TabIndex = 1;
            radioButton2.TabStop = true;
            radioButton2.Text = "RESTAR";
            radioButton2.UseVisualStyleBackColor = true;
            radioButton2.CheckedChanged += radioButton2_CheckedChanged;
            // 
            // radioButton1
            // 
            radioButton1.AutoSize = true;
            radioButton1.Location = new Point(61, 71);
            radioButton1.Name = "radioButton1";
            radioButton1.Size = new Size(88, 29);
            radioButton1.TabIndex = 0;
            radioButton1.TabStop = true;
            radioButton1.Text = "Sumar";
            radioButton1.UseVisualStyleBackColor = true;
            radioButton1.CheckedChanged += radioButton1_CheckedChanged;
            // 
            // labelResultado
            // 
            labelResultado.AccessibleName = "labelResultado";
            labelResultado.AutoSize = true;
            labelResultado.BackColor = SystemColors.ControlLightLight;
            labelResultado.Location = new Point(455, 463);
            labelResultado.Name = "labelResultado";
            labelResultado.Size = new Size(85, 25);
            labelResultado.TabIndex = 4;
            labelResultado.Text = "Resultato";
            labelResultado.Click += label1_Click;
            // 
            // toolStrip1
            // 
            toolStrip1.Dock = DockStyle.Right;
            toolStrip1.ImageScalingSize = new Size(24, 24);
            toolStrip1.Items.AddRange(new ToolStripItem[] { toolStripButton1, toolStripButton2, toolStripButton3 });
            toolStrip1.Location = new Point(666, 33);
            toolStrip1.Name = "toolStrip1";
            toolStrip1.Size = new Size(48, 589);
            toolStrip1.TabIndex = 7;
            toolStrip1.Text = "toolStrip1";
            // 
            // toolStripButton1
            // 
            toolStripButton1.DisplayStyle = ToolStripItemDisplayStyle.Image;
            toolStripButton1.Image = (Image)resources.GetObject("toolStripButton1.Image");
            toolStripButton1.ImageTransparentColor = Color.Magenta;
            toolStripButton1.Name = "toolStripButton1";
            toolStripButton1.Size = new Size(43, 28);
            toolStripButton1.Text = "toolStripButton1";
            toolStripButton1.Click += toolStripButton1_Click;
            // 
            // toolStripButton2
            // 
            toolStripButton2.DisplayStyle = ToolStripItemDisplayStyle.Image;
            toolStripButton2.Image = (Image)resources.GetObject("toolStripButton2.Image");
            toolStripButton2.ImageTransparentColor = Color.Magenta;
            toolStripButton2.Name = "toolStripButton2";
            toolStripButton2.Size = new Size(43, 28);
            toolStripButton2.Text = "toolStripButton2";
            toolStripButton2.Click += toolStripButton2_Click;
            // 
            // toolStripButton3
            // 
            toolStripButton3.DisplayStyle = ToolStripItemDisplayStyle.Image;
            toolStripButton3.Image = (Image)resources.GetObject("toolStripButton3.Image");
            toolStripButton3.ImageTransparentColor = Color.Magenta;
            toolStripButton3.Name = "toolStripButton3";
            toolStripButton3.Size = new Size(43, 28);
            toolStripButton3.Text = "toolStripButton3";
            // 
            // menuStrip1
            // 
            menuStrip1.ImageScalingSize = new Size(24, 24);
            menuStrip1.Items.AddRange(new ToolStripItem[] { oPERARToolStripMenuItem, sortirToolStripMenuItem });
            menuStrip1.Location = new Point(0, 0);
            menuStrip1.Name = "menuStrip1";
            menuStrip1.Size = new Size(714, 33);
            menuStrip1.TabIndex = 8;
            menuStrip1.Text = "menuStrip1";
            // 
            // oPERARToolStripMenuItem
            // 
            oPERARToolStripMenuItem.Name = "oPERARToolStripMenuItem";
            oPERARToolStripMenuItem.Size = new Size(95, 29);
            oPERARToolStripMenuItem.Text = "OPERAR";
            // 
            // sortirToolStripMenuItem
            // 
            sortirToolStripMenuItem.Name = "sortirToolStripMenuItem";
            sortirToolStripMenuItem.Size = new Size(71, 29);
            sortirToolStripMenuItem.Text = "Sortir";
            // 
            // Form1
            // 
            AutoScaleDimensions = new SizeF(10F, 25F);
            AutoScaleMode = AutoScaleMode.Font;
            BackColor = SystemColors.ControlDarkDark;
            BackgroundImage = Properties.Resources.Tipos_de_azules;
            ClientSize = new Size(714, 622);
            Controls.Add(toolStrip1);
            Controls.Add(menuStrip1);
            Controls.Add(labelResultado);
            Controls.Add(groupBox1);
            Controls.Add(textBox2);
            Controls.Add(textBox1);
            Controls.Add(button1);
            MainMenuStrip = menuStrip1;
            Name = "Form1";
            Text = "Form1";
            Load += Form1_Load;
            groupBox1.ResumeLayout(false);
            groupBox1.PerformLayout();
            toolStrip1.ResumeLayout(false);
            toolStrip1.PerformLayout();
            menuStrip1.ResumeLayout(false);
            menuStrip1.PerformLayout();
            ResumeLayout(false);
            PerformLayout();
        }

        #endregion

        private Button button1;
        private TextBox textBox1;
        private TextBox textBox2;
        private GroupBox groupBox1;
        private RadioButton radioButton3;
        private RadioButton radioButton2;
        private RadioButton radioButton1;
        private System.ComponentModel.BackgroundWorker backgroundWorker1;
        private Label labelResultado;
        private ToolStrip toolStrip1;
        private ToolStripButton toolStripButton1;
        private ToolStripButton toolStripButton2;
        private MenuStrip menuStrip1;
        private ToolStripButton toolStripButton3;
        private ToolStripMenuItem oPERARToolStripMenuItem;
        private ToolStripMenuItem sortirToolStripMenuItem;
    }
}
