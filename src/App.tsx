import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome5";

const DashboardScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.companyName}>Sucratu</Text>
          <Text style={styles.welcomeText}>
            Hello, <Text style={styles.boldText}>Pritam Bhansali</Text>
          </Text>
        </View>
        <TouchableOpacity style={styles.profileIcon}>
          <Icon name="person-circle-outline" size={32} color="#333" />
        </TouchableOpacity>
      </View>

      {/* Quick Actions */}
      <View style={styles.quickActions}>
        <TouchableOpacity style={styles.actionCard}>
          <FontAwesome name="user-check" size={24} color="#004AAD" />
          <Text style={styles.actionText}>Attendance</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionCard}>
          <MaterialIcon name="receipt-long" size={24} color="#004AAD" />
          <Text style={styles.actionText}>Expense Claims</Text>
        </TouchableOpacity>
      </View>

      {/* More Actions */}
      <Text style={styles.sectionTitle}>More Actions</Text>
      <View style={styles.moreActions}>
        <TouchableOpacity style={styles.iconButton}>
          <MaterialIcon name="umbrella" size={24} color="#00B074" />
          <Text style={styles.iconText}>Apply Leave</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <MaterialIcon name="attach-money" size={24} color="#00B074" />
          <Text style={styles.iconText}>Add Expense</Text>
        </TouchableOpacity>
      </View>

      {/* Attendance Summary */}
      <View style={styles.summaryCard}>
        <Text style={styles.summaryTitle}>Your Attendance</Text>
        <View style={styles.summaryRow}>
          <View style={styles.summaryBox}>
            <Text style={styles.summaryNumber}>20</Text>
            <Text style={styles.summaryLabel}>Present</Text>
          </View>
          <View style={styles.summaryBox}>
            <Text style={styles.summaryNumber}>5</Text>
            <Text style={styles.summaryLabel}>Leaves</Text>
          </View>
          <View style={styles.summaryBox}>
            <Text style={styles.summaryNumber}>2</Text>
            <Text style={styles.summaryLabel}>Absent</Text>
          </View>
        </View>
      </View>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <FontAwesome name="user-check" size={22} color="#888" />
          <Text style={styles.navText}>Attendance</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.navItem, styles.activeNav]}>
          <Icon name="home" size={24} color="#004AAD" />
          <Text style={[styles.navText, styles.activeNavText]}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="settings-outline" size={22} color="#888" />
          <Text style={styles.navText}>Settings</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F9FB",
    padding: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  companyName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#004AAD",
  },
  welcomeText: {
    fontSize: 18,
    color: "#333",
  },
  boldText: {
    fontWeight: "bold",
  },
  profileIcon: {
    backgroundColor: "#E0E0E0",
    borderRadius: 50,
    padding: 5,
  },
  quickActions: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  actionCard: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
  },
  actionText: {
    fontSize: 14,
    color: "#333",
    marginTop: 8,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginTop: 20,
    marginBottom: 10,
  },
  moreActions: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  iconButton: {
    flex: 1,
    backgroundColor: "#E8F5E9",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
  },
  iconText: {
    fontSize: 14,
    color: "#00B074",
    marginTop: 8,
  },
  summaryCard: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    marginTop: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
  },
  summaryTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginBottom: 10,
  },
  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  summaryBox: {
    alignItems: "center",
  },
  summaryNumber: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#004AAD",
  },
  summaryLabel: {
    fontSize: 14,
    color: "#666",
  },
  bottomNav: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 15,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    position: "absolute",
    bottom: 0,
    width: "100%",
    justifyContent: "space-around",
    elevation: 5,
  },
  navItem: {
    alignItems: "center",
  },
  navText: {
    fontSize: 12,
    color: "#888",
    marginTop: 5,
  },
  activeNav: {
    borderBottomWidth: 3,
    borderBottomColor: "#004AAD",
  },
  activeNavText: {
    color: "#004AAD",
  },
});

export default DashboardScreen;
