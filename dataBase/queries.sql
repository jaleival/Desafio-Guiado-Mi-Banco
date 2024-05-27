CREATE TABLE cuentas (
	id INT PRIMARY KEY, 
	saldo DECIMAL CHECK (saldo >= 0) 
);

INSERT INTO CUENTAS (id, saldo) VALUES 
(1, 10000),
(2, 20000);

INSERT INTO CUENTAS (id, saldo) VALUES 
(3, 50000);

CREATE TABLE transferencias(
	id SERIAL PRIMARY KEY, 
	fecha DATE DEFAULT CURRENT_DATE, 
	monto DECIMAL,
	cuenta_origen INT, 
	cuenta_destino INT,
	FOREIGN KEY(cuenta_origen) REFERENCES cuentas(id) ON DELETE CASCADE,
	FOREIGN KEY(cuenta_destino) REFERENCES cuentas(id) ON DELETE CASCADE
);