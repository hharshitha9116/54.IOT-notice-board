* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, Helvetica, sans-serif;
    background: #eef3f8;
    color: #222;
}

/* Header */

header {
    background: linear-gradient(135deg, #073b73, #1261a0);
    color: white;
    text-align: center;
    padding: 30px 20px;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
}

header h1 {
    font-size: 32px;
    margin-bottom: 8px;
}

header p {
    opacity: 0.9;
}

/* Main */

.container {
    width: 90%;
    max-width: 1100px;
    margin: 30px auto;
}

/* Card */

.card {
    background: white;
    padding: 25px;
    margin-bottom: 25px;
    border-radius: 12px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
}

.card h2 {
    color: #073b73;
    margin-bottom: 20px;
}

/* Form */

.form-group {
    margin-bottom: 18px;
}

.form-group label {
    display: block;
    font-weight: bold;
    margin-bottom: 7px;
}

.form-group input,
.form-group select {
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 7px;
    font-size: 15px;
}

.form-group input:focus,
.form-group select:focus {
    outline: none;
    border-color: #1261a0;
}

/* Priority */

.priority-box {
    background: #fff7df;
    border: 1px solid #f1d47a;
    padding: 12px;
    border-radius: 7px;
    margin-bottom: 18px;
}

.priority-box label {
    font-weight: bold;
    color: #8a6500;
    margin-left: 5px;
}

/* Buttons */

.button-group {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
}

.btn {
    border: none;
    padding: 12px 20px;
    border-radius: 7px;
    color: white;
    font-size: 15px;
    font-weight: bold;
    cursor: pointer;
    transition: 0.2s;
}

.btn:hover {
    transform: translateY(-2px);
    opacity: 0.9;
}

.primary {
    background: #1261a0;
    width: 100%;
}

.success {
    background: #198754;
}

.danger {
    background: #dc3545;
}

/* Generated Token */

.token-display {
    margin-top: 20px;
    background: #e8f3ff;
    border: 2px dashed #1261a0;
    color: #073b73;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    font-size: 20px;
    font-weight: bold;
}

/* Serving */

.serving {
    margin-top: 20px;
    background: #e8f8ef;
    border-left: 5px solid #198754;
    padding: 18px;
    border-radius: 7px;
    font-size: 17px;
}

/* Statistics */

.stats {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 18px;
    margin-bottom: 25px;
}

.stat-card {
    background: white;
    padding: 22px;
    text-align: center;
    border-radius: 10px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
}

.stat-card h3 {
    color: #555;
    margin-bottom: 10px;
}

.stat-card p {
    font-size: 30px;
    font-weight: bold;
    color: #1261a0;
}

/* Queue */

.section-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
}

#queueStatus {
    background: #eee;
    padding: 7px 12px;
    border-radius: 20px;
    font-size: 13px;
}

.queue-container {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.customer {
    display: grid;
    grid-template-columns: 90px 1fr 150px 120px;
    align-items: center;
    gap: 15px;

    padding: 16px;
    border-radius: 9px;
    border: 1px solid #ddd;
    background: #fafafa;
}

.customer.priority {
    background: #fff8df;
    border: 2px solid #f0c94d;
}

.token {
    font-weight: bold;
    font-size: 18px;
    color: #1261a0;
}

.customer-name {
    font-weight: bold;
}

.service {
    color: #666;
}

.priority-label {
    background: #ffc107;
    color: #5c4500;
    padding: 6px 10px;
    border-radius: 15px;
    text-align: center;
    font-size: 12px;
    font-weight: bold;
}

/* Explanation */

.structure {
    padding: 15px;
    margin-bottom: 12px;
    background: #f5f8fb;
    border-left: 4px solid #1261a0;
    border-radius: 5px;
}

.structure h3 {
    color: #073b73;
    margin-bottom: 5px;
}

.structure p {
    color: #555;
    line-height: 1.5;
}

/* Footer */

footer {
    background: #073b73;
    color: white;
    text-align: center;
    padding: 20px;
    margin-top: 30px;
}

/* Responsive */

@media (max-width: 800px) {

    .stats {
        grid-template-columns: repeat(2, 1fr);
    }

    .customer {
        grid-template-columns: 1fr;
        gap: 8px;
    }
}

@media (max-width: 500px) {

    header h1 {
        font-size: 24px;
    }

    .container {
        width: 95%;
    }

    .stats {
        grid-template-columns: 1fr;
    }

    .button-group {
        flex-direction: column;
    }

    .btn {
        width: 100%;
    }
}
