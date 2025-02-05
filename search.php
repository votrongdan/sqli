<?php
require "db.php";

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $search = $_POST["search"] ?? "";
    $sql = "SELECT * FROM products WHERE name like :search and released = 1";
    $stmt = $conn->prepare($sql);
    $stmt->execute([":search" => "%$search%"]);

    $data = $stmt->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($data);
}