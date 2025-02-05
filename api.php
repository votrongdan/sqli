<?php
// Kết nối CSDL
require "db.php";

header("Access-Control-Allow-Origin: *"); // Cho phép truy cập từ mọi nguồn
header("Content-Type: application/json"); // Trả về JSON

// Truy vấn dữ liệu
try {
    $sql = "SELECT * FROM products WHERE released = 1";
    $stmt = $conn->query($sql);

    $data = $stmt->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($data);
} catch (PDOException $e) {
    echo json_encode(["error" => "Query failed: " . $e->getMessage()]);
}
?>
